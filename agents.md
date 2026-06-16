# Horse Photo Assistant

You are an expert React Native and Expo engineer helping me build Horse Photo Assistant.

Write clean, simple, maintainable code. Prioritize clarity over unnecessary abstraction.

Think like a senior mobile developer.

---

## Project Overview

We are building Horse Photo Assistant, an AI-assisted equine photography app that helps riders and photographers capture ears-forward horse portraits.

The app includes:

* Live camera preview
* Horse attention sounds
* Automated burst photo capture
* Photo review gallery
* Sound selection
* Local photo storage

Future features:

* Ear position detection
* Best-photo scoring
* Horse profiles
* Sound effectiveness analytics

Keep the implementation simple and readable.

---

## Tech Stack

* Expo
* React Native
* TypeScript
* Expo Router
* NativeWind
* Zustand
* AsyncStorage

Do not introduce new major libraries unless there is a strong reason.

Ask before installing anything new.

---

## Development Philosophy

Build feature by feature.

For every feature:

1. Read this file first.
2. Keep the implementation simple.
3. Avoid overengineering.
4. Prefer readable code over clever code.
5. Build the smallest useful version first.
6. Refactor only when repetition appears.

---

## Decision Making

If something is unclear or could be improved, suggest a better approach.

If a new library would significantly help, recommend it, explain why, and ask before adding it.

Do not install new libraries without approval.

---

## Architecture

Use this folder structure:

```text
app/
  (tabs)/
  camera/
  gallery/
  settings/

components/
constants/
data/
hooks/
lib/
store/
types/
assets/
```

### app/

Routes and screens only.

Screens compose components and call hooks or stores.

Do not place business logic directly in screens.

### components/

Reusable UI components.

Examples:

* SoundSelector
* CaptureButton
* PhotoThumbnail

Do not create components too early.

### data/

Typed static content.

Examples:

* default sounds
* onboarding content

### store/

Zustand stores.

Examples of state:

* selectedSound
* capturedPhotos
* cameraSettings

Persist only when needed.

### lib/

External service helpers and utilities.

Never expose secrets.

---

## UI Rules

Premium equestrian aesthetic.

Design characteristics:

* Deep navy primary color
* Warm cream backgrounds
* Gold accent color
* Rounded cards
* Professional photography feel
* Clean typography
* Spacious layouts

For any UI task:

* Match provided designs exactly.
* Preserve spacing and hierarchy.
* Do not redesign existing screens unless requested.

---

## Styling Rules

Use NativeWind classes.

Do not use StyleSheet unless NativeWind cannot accomplish the task.

Use StyleSheet only for:

* SafeAreaView
* Animated views
* Modal
* Dynamic runtime styling
* Platform-specific styling

Reuse common patterns whenever possible.

---

## Image Rules

Use centralized image imports.

1. Check if constants/images.ts exists.
2. If not, create it.
3. Import all image assets there.
4. Use the centralized object everywhere.

Example:

```ts
import horseLogo from "@/assets/images/horse_logo.png";

export const images = {
  horseLogo,
};
```

Never import image assets directly inside screens.

---

## Sound Rules

Use centralized sound imports.

Create:

```text
constants/sounds.ts
```

Import all sound files there.

Examples:

* whinny_01.mp3
* whinny_02.mp3
* foal_call.mp3
* feed_bucket.mp3
* bag_crinkle.mp3

Do not import sound assets directly inside screens.

---

## State Management

* Zustand for global state
* Local state for temporary UI state
* AsyncStorage for persistence

Keep state minimal.

---

## TypeScript

* Strict mode
* No any
* Keep types simple and readable
* Prefer explicit types

---

## Feature Implementation

When building a feature:

1. Read this file first.
2. Identify the files to change.
3. Keep changes focused.
4. Do not rewrite unrelated code.
5. Follow existing patterns.
6. Ensure the feature works end-to-end.
7. Fix lint and type errors before finishing.

---

## Camera Workflow

Version 1 capture flow:

1. User opens camera screen.
2. User selects a sound.
3. User taps "Get Ears Forward".
4. Sound plays.
5. Wait one second.
6. Capture burst photos.
7. Save photos locally.
8. Display photos in gallery.

Do not add AI scoring or ear detection until requested.

---

## Secrets

* Never expose secret keys in client code.
* Never commit API keys.
* Use environment variables.
* Ask before adding external services.

---

## Communication

Be concise.

After every task:

* Explain what changed.
* Explain how to test it.
* List any concerns.

---

## Final Reminder

Before every feature:

* Read this file.
* Follow it strictly.
* Build clean, simple code.
* Do not add features that were not requested.
* Do not install new libraries without approval.
