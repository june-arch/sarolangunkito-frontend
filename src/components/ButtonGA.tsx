"use client";
import { sendGAEvent } from "@next/third-parties/google";

export function EventButtonGA() {
    return (
      <div>
        <button
          onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'xyz' })}
        >
          Send Event
        </button>
      </div>
    )
  }