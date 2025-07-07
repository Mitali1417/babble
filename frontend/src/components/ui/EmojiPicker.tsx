import React from "react";
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Smile } from "lucide-react";
import { Button } from "./button";

interface EmojiPickerProps {
  onSelect: (emoji: string) => void;
}

export const EmojiPicker: React.FC<EmojiPickerProps> = ({ onSelect }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="p-2"
          aria-label="Add emoji"
        >
          <Smile className="w-5 h-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="p-0 w-auto">
        <Picker
          data={data}
          onEmojiSelect={(emoji: any) => {
            onSelect(emoji.native);
            setOpen(false);
          }}
          previewPosition="none"
          skinTonePosition="none"
          theme="light" // or "auto" or "dark"
          style={{ border: "none", boxShadow: "none" }}
        />
      </PopoverContent>
    </Popover>
  );
}; 