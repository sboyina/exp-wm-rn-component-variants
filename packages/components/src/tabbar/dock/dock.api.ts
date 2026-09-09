/**
 * Dock Tabbar — generated skeleton, filled in by hand.
 * Source design: dock-tabbar. Regenerating overwrites nothing that exists.
 */
// GENERATED from the design spec's merged component API. Every prop and event
// the widget exposes is listed here once: the props file, the Storybook stories,
// the unit tests and the Studio metadata are all expected to agree with it.
// Regenerate by re-running the scaffolder; do not hand-edit.

/** Shape of the manifest below. Declared locally so this file depends on nothing. */
export type DockTabbarApiProp = {
  name: string;
  kind: 'string' | 'number' | 'boolean' | 'color' | 'list' | 'style' | 'function';
  required: boolean;
  default: string | number | boolean | null;
  description: string;
  source: 'family' | 'repo' | 'design';
};
export type DockTabbarApiEvent = {
  name: string;
  payload: string;
  description: string;
  source: 'family' | 'repo' | 'design';
};

export const DOCK_TABBAR_API: { props: DockTabbarApiProp[]; events: DockTabbarApiEvent[] } =
{
  "props": [
    {
      "name": "classname",
      "kind": "string",
      "required": false,
      "default": null,
      "description": "Extra class names merged into the root style resolution.",
      "source": "family"
    },
    {
      "name": "disabled",
      "kind": "boolean",
      "required": false,
      "default": false,
      "description": "Disables interaction.",
      "source": "family"
    },
    {
      "name": "layout.cornerRadius",
      "kind": "color",
      "required": false,
      "default": null,
      "description": "Fill for the cornerRadius surface. Defaults to the cornerRadius constant in the styles file.",
      "source": "design"
    },
    {
      "name": "layout.iconSize",
      "kind": "color",
      "required": false,
      "default": null,
      "description": "Fill for the iconSize surface. Defaults to the iconSize constant in the styles file.",
      "source": "design"
    },
    {
      "name": "layout.itemSpacing",
      "kind": "color",
      "required": false,
      "default": null,
      "description": "Fill for the itemSpacing surface. Defaults to the itemSpacing constant in the styles file.",
      "source": "design"
    },
    {
      "name": "name",
      "kind": "string",
      "required": true,
      "default": null,
      "description": "Widget name, unique within the page.",
      "source": "family"
    },
    {
      "name": "show",
      "kind": "boolean",
      "required": false,
      "default": true,
      "description": "Whether the widget renders at all.",
      "source": "family"
    },
    {
      "name": "styles",
      "kind": "style",
      "required": false,
      "default": null,
      "description": "Per-region style overrides, keyed by the design’s style regions.",
      "source": "family"
    }
  ],
  "events": [
    {
      "name": "onTap",
      "payload": "()",
      "description": "The widget was tapped.",
      "source": "family"
    }
  ]
};

/** Prop names, for tests and metadata that must stay exhaustive. */
export const DOCK_TABBAR_PROP_NAMES = ["classname","disabled","layout.cornerRadius","layout.iconSize","layout.itemSpacing","name","show","styles"] as const;

/** Event names, same reason. */
export const DOCK_TABBAR_EVENT_NAMES = ["onTap"] as const;
