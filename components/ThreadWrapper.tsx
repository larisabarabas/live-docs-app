import { useIsThreadActive } from "@liveblocks/react-lexical";
import { Thread } from "@liveblocks/react-ui";
import { cn } from "@/lib/utils";
import React from "react";

const ThreadWrapper = ({ thread }: ThreadWrapperProps) => {
  const isActive = useIsThreadActive(thread.id);
  console.log(thread);

  return (
    <Thread
      thread={thread}
      data-state={isActive ? "active" : null}
      className={cn(
        "comment-thread border",
        isActive && "!border-blue-500 shadow-md",
        thread.resolved && "!opacity-40"
      )}
    />
  );
};

export default ThreadWrapper;
