# SlideTemplates

Professional React slide templates library for Dust AI agents.

## Purpose

This repository provides ready-to-use slide templates for building high-quality presentations. Each template is a standalone React component optimized for agent usage.

## Structure

```
SlideTemplates/
├── template1/
│   └── 3ColumnLeft_ImageRight.tsx
└── template2/
    └── [additional slides]
```

**Key principle**:
- One folder = one template style
- One file = one slide layout
- Agents select appropriate slides based on content type

## Available Templates

### Template 1

#### `3ColumnLeft_ImageRight.tsx`
**Layout**: 3 stat cards (left) + background image with text overlay (right)

**Use cases**:
- Key metrics presentation
- 3-point feature highlights
- Introduction slides with focal question

**Configuration section**:
```tsx
// Colors
const PRIMARY_COLOR = "#6b7280";
const ACCENT_COLOR = "#374151";

// Content
const SECTION_TITLE = "[Section Title]";
const SUBTITLE = "[Subtitle]";
const cards = [...]; // 3 cards with stats/descriptions
const TEXT_BOX_CONTENT = {...}; // Overlay text
```

## Agent Usage Instructions

### 1. Template Selection
- Analyze content type (stats, comparison, timeline, etc.)
- Match content structure to available slide layouts
- Select appropriate template file

### 2. Customization Process
**IMPORTANT**: Only modify the `TEMPLATE CONFIGURATION` section at the top of each file.

**Editable parameters**:
- `PRIMARY_COLOR`, `ACCENT_COLOR`, `BACKGROUND_COLOR`
- `SECTION_TITLE`, `SUBTITLE`
- Data arrays (`cards`, etc.)
- Text content objects
- Icon components (from Lucide React)

**DO NOT modify**:
- React component logic
- Rendering code (after `END CONFIGURATION` marker)
- Grid layouts or responsive units

### 3. Best Practices
- Read entire template file before customization
- Keep text concise for visual clarity
- Use consistent colors across multiple slides
- Select semantically appropriate icons
- Preserve multi-line formatting with `\n`

## Technical Specifications

- **Framework**: React + TypeScript
- **Icons**: Lucide React
- **Styling**: Tailwind CSS + inline styles
- **Units**: Viewport-relative (`vw`, `vh`) for responsiveness
- **Navigation**: Keyboard support included

## Example Customization

```tsx
// Before
const cards = [
  {
    number: "1.",
    title: "[Card Title 1\nMulti-line]",
    statValue: "[XX%]",
    description: "[Description]",
    icon: Users,
  }
];

// After (agent adaptation)
const cards = [
  {
    number: "1.",
    title: "Customer\nSatisfaction",
    statValue: "94%",
    description: "Up 8pts YoY\nHighest in industry",
    icon: Users,
  }
];
```

## Adding New Templates

1. Create new folder: `templateN/`
2. Add slide files with clear configuration sections
3. Update this README with descriptions
4. Maintain consistent structure conventions

---

**For AI Agents**: This library enables professional presentation generation. Select slides intelligently based on content structure and customize only the configuration parameters.
