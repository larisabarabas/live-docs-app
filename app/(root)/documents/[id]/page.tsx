import { Editor } from "@/components/editor/Editor";
import Header from "@/components/Header";
import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Document = () => {
  return (
    <div>
      <Header>
        <div className="flex w-fit items-center justify-center">
          <p className="document-title"> This a document title </p>
        </div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Header>
      <Editor />
    </div>
  );
};

export default Document;
