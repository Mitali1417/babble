import React from "react";
import { Picker } from "emoji-mart";
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
          set="apple"
          onSelect={(emoji: any) => {
            onSelect(emoji.native);
            setOpen(false);
          }}
          showPreview={false}
          showSkinTones={false}
          style={{ border: "none", boxShadow: "none" }}
        />
      </PopoverContent>
    </Popover>
  );
}; 