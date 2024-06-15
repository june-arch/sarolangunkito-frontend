"use client";

import { sendGTMEvent } from "@next/third-parties/google";

export function EventButtonGTM() {
    return (
      <div>
        <button
          onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'xyz' })}
        >
          Send Event GTM
        </button>
      </div>
    )
  }