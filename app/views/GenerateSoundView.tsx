"use client";

import { GenerateSoundForm } from "@/components/GenerateSoundForm";
import Loader from "@/components/Loader";
import { useState } from "react";

export default function GenerateSoundView() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  /**
   * Handles the process of fetching audio data using the provided request.
   * @param {CreateSoundRequest} request - The request containing model URL and text.
   */
  const handleGetAudio = async (request: CreateSoundRequest) => {
    setIsLoading(true);

    try {
      // Make a POST request to the server's API endpoint to generate audio
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: request.text,
          modelUrl: request.modelUrl,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch audio data.");
      }

      // Get the audio data as an ArrayBuffer
      const data = await response.arrayBuffer();

      // Convert ArrayBuffer to Blob and create a URL for the audio
      const blob = new Blob([data], { type: "audio/mpeg" });
      const audioUrl = URL.createObjectURL(blob);
      setAudioUrl(audioUrl);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen ">
      <div className="w-full md:w-2/3 mx-auto p-4">
        <div className="ml-8 mr-8 mt-4 mb-4 text-xl">
          <h1 className="text-center tracking-wider font-semibold text-2xl">
            Text to Speech
          </h1>
        </div>
        <GenerateSoundForm handleGetAudio={handleGetAudio} />
      </div>
      <div className="w-full md:w-2/3 mx-auto p-4 h-screen">
        <div className="h-full flex justify-center items-center">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {audioUrl && (
                <audio controls>
                  <source id="audioSource" type="audio/flac" src={audioUrl!} />
                </audio>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
