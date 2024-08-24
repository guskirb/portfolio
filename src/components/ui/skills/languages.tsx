import {
  Html5Original,
  Css3Original,
  JavascriptOriginal,
  TypescriptOriginal,
} from "devicons-react";
import { Braces } from "lucide-react";
import { Tooltip } from "react-tooltip";
import Card from "./card";

export default function Languages() {
  return (
    <Card color="bg-pink-300">
      <Braces size={60} className="dark:text-white absolute rotate-6 translate-x-[230px] -translate-y-11"/>
      <h3 className="text-2xl">Languages</h3>
      <div className="flex gap-3 flex-wrap">
        <Tooltip id="html" float>
          HTML
        </Tooltip>
        <Html5Original size="60" data-tooltip-id="html" />
        <Tooltip id="css" float>
          CSS
        </Tooltip>
        <Css3Original size="60" data-tooltip-id="css" />
        <Tooltip id="js" float>
          JavaScript
        </Tooltip>
        <JavascriptOriginal size="60" data-tooltip-id="js" />
        <Tooltip id="ts" float>
          TypeScript
        </Tooltip>
        <TypescriptOriginal size="60" data-tooltip-id="ts" />
      </div>
    </Card>
  );
}
