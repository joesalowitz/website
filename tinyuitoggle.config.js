import { Toggle, toggleAutoInit } from 'tiny-ui-toggle.js';

// Initialize all elements with default options, these can be overridden by reinitializing or by data attributes on the element.
toggleAutoInit();

// Initialize all elements manually which allows you to pass in custom options.
const toggleElements = document.querySelectorAll('.toggle');
for (const item of toggleElements) {
  Toggle({ selector: item });
};

// Initialize a single instance.
const defaultToggle = Toggle({ selector: '.toggle' });