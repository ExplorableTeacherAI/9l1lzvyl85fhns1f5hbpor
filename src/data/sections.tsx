import { type ReactElement } from "react";
import { Section } from "@/components/templates";
import { FullWidthLayout } from "@/components/layouts";
import { EditableText } from "@/components/editing";
import { InteractiveEquation } from "@/components/molecules/InteractiveEquation";

// Initialize variables from this file's variable definitions
import { useVariableStore } from "@/stores";
import { getDefaultValues } from "./variables";
useVariableStore.getState().initialize(getDefaultValues());

/**
 * ------------------------------------------------------------------
 * SECTION CONFIGURATION
 * ------------------------------------------------------------------
 * This file is the entry point for your lesson content.
 * 
 * INSTRUCTIONS:
 * 1. Create your content using the <Section> component.
 * 2. Use Layout components to organize your sections.
 * 3. Add your sections to the `sections` array below.
 * 
 * ------------------------------------------------------------------
 * CROSS-SECTION VARIABLES
 * ------------------------------------------------------------------
 * Variables can be shared across sections using the global store.
 * 
 * DEFINE VARIABLES: src/data/variables.ts
 * 
 * USAGE IN SECTIONS:
 * 
 * // Reading a value (auto-updates when changed):
 * import { useVar } from '@/stores';
 * const amplitude = useVar('amplitude', 1);
 * 
 * // Setting a value:
 * import { useSetVar } from '@/stores';
 * const setVar = useSetVar();
 * setVar('amplitude', 2.5);
 * 
 * ------------------------------------------------------------------
 * AVAILABLE LAYOUTS
 * ------------------------------------------------------------------
 * 
 * 1. FullWidthLayout
 *    - Best for: Title headers, introductory text, broad visualizations.
 *    - Usage:
 *      <FullWidthLayout maxWidth="xl">
 *          <Section id="intro">...</Section>
 *      </FullWidthLayout>
 * 
 * 2. SplitLayout
 *    - Best for: Side-by-side content (e.g., Text + Visualization).
 *    - Usage:
 *      <SplitLayout ratio="1:1" gap="lg">
 *          <Section id="left">...</Section>
 *          <Section id="right">...</Section>
 *      </SplitLayout>
 * 
 * 3. GridLayout
 *    - Best for: Multiple equal-sized items (cards, galleries).
 *    - Usage:
 *      <GridLayout columns={3} gap="md">
 *          <Section id="item-1">...</Section>
 *          <Section id="item-2">...</Section>
 *          <Section id="item-3">...</Section>
 *      </GridLayout>
 * 
 * 4. SidebarLayout
 *    - Best for: Main content with a sticky sidebar (glossary, controls).
 *    - Usage:
 *      <SidebarLayout sidebarPosition="left" sidebarWidth="medium">
 *          <Sidebar><Section id="sidebar">...</Section></Sidebar>
 *          <Main><Section id="main">...</Section></Main>
 *      </SidebarLayout>
 * 
 * EXAMPLES:
 * See `src/data/exampleSections.tsx` for comprehensive examples.
 * 
 * NOTE: If you are seeing examples in the browser instead of this content,
 * check your .env file and set VITE_SHOW_EXAMPLES=false.
 */

export const sections: ReactElement[] = [
    <FullWidthLayout key="inline-editing-demo" maxWidth="xl">
        <Section id="inline-editing-demo">
            <EditableText as="h2" className="text-2xl font-bold mb-4">
                Inline Editing Demo
            </EditableText>
            <EditableText as="p" className="text-muted-foreground mb-4">
                This section demonstrates the inline editing feature. Click the Edit button in the header to enable editing mode. Then you can click on text to edit it directly, or hover over equations to see the edit button.
            </EditableText>
            <EditableText as="p" className="text-foreground">
                Physics is the study of matter, energy, and the fundamental forces that govern the universe. Try editing this paragraph! test bla
            </EditableText>
        </Section>
    </FullWidthLayout>,
    <FullWidthLayout key="section-1769973450384" maxWidth="xl">
        <Section id="section-1769973450384">
            <EditableText as="p" className="text-foreground">
                this is first added text para
            </EditableText>
        </Section>
    </FullWidthLayout>,
    <FullWidthLayout key="section-1769973472683" maxWidth="xl">
        <Section id="section-1769973472683">
            <EditableText as="p" className="text-foreground">
                this is second added text para
            </EditableText>
        </Section>
    </FullWidthLayout>,
];
