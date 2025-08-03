"use client";

// Corrected to PascalCase: CopyButtonProps
interface CopyButtonProps {
  email: string;
}

// Using the corrected interface name
export default function CopyButton({ email }: CopyButtonProps) {

  // Corrected to camelCase: handleCopy
  function handleCopy() {
    navigator.clipboard.writeText(email);
    // Corrected typo: clipboard
    alert("Email copied to clipboard!");
  }

  return (
    <button
      onClick={handleCopy}
      className="mt-4 rounded-md bg-zinc-700 px-3 py-2 text-sm font-medium hover:bg-zinc-600"
    >
      Copy Email
    </button>
  );
}