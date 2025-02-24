# night-mode-switch


![Screnshoot]( https://github.com/Ammar-Alkhalidi/night-mode-switch/blob/main/reference.gif)


The Room component demonstrates how to manage and toggle states in React. It features a light switch that toggles the room's state between lit (bright) and dark.

# Features
1-Dynamic Room State:

* The room has two states: "lit" (bright) and "dark."
* The state is controlled by a button.
2- State Management:

* Uses React's useState hook to track whether the light is on or off.
* Toggles the state using an updater function.
  
3- Visual Feedback:

*-The room's background and description dynamically change based on its state:
*-"lit" state shows a bright yellow background.
*-"dark" state shows a black background.

# Props
The Room component does not accept any props, as all functionality is self-contained.

# How It Works
*-State Initialization:
The room starts in the "lit" state (light is on).

*- Toggling State:

*-Clicking the button toggles the isLightOn state between true and false.
*-Based on the state:
*-The className of the <div> changes to either lit or dark.
*-The text updates to "The room is bright" or "The room is dark."


# Example Output
*-When the light is on:
*-Background Color: Yellow
*-Text: "The room is bright"
# Button Text: "Turn off"
*-When the light is off:
*-Background Color: Black
*-Text: "The room is dark"
*-Button Text: "Turn on"


Scripted by AMMAR ALKHALIDI
danke >Yousif