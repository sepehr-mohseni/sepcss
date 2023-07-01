# SepCSS Documentation

## Introduction

SepCSS is a lightweight CSS framework designed to provide a set of customizable styles for web development projects. It aims to simplify the process of styling web applications by providing a collection of predefined classes and components that can be easily integrated into your HTML markup.

This documentation will guide you through the structure of the `sepcss` code repository and explain how to use and customize the framework.

## Repository Structure

The `sepcss` repository follows a standard structure for organizing the code:

- `dist/`: Contains the compiled CSS files.
- `examples/`: Provides examples of using `sepcss` in different scenarios.
- `src/`: Contains the source files of the framework.
  - `scss/`: Contains the Sass files used to generate the CSS styles.
    - `_variables.scss`: Defines the global variables used for customization.
    - `sepcss.scss`: Imports all the Sass partials and generates the CSS output.
    - ...
  - `css/`: Contains additional CSS files.
- `CONTRIBUTING.md`: Guidelines for contributing to the project.
- `LICENSE`: The license file for the project.
- `README.md`: The main README file.

## Getting Started

To get started with SepCSS, follow these steps:

1. Clone the `sepcss` repository to your local machine.
2. Navigate to the `dist/` directory to find the compiled CSS files.
3. Include the `sepcss.css` or `sepcss.min.css` file in your HTML file.
4. Customize the framework by modifying the variables in the `_variables.scss` file.
5. Compile the Sass files to generate the updated CSS stylesheets.
6. Start using the SepCSS classes and components in your HTML markup.

## Examples

The `index.html` file contains a set of sample HTML files that demonstrate the usage of SepCSS in various scenarios. You can refer to these examples to understand how to implement different components and styles in your own projects.

## Customization

SepCSS is designed to be customizable to fit your project's specific needs. The `_variables.scss` file in the `src/scss/` directory contains a list of variables that you can modify to change the appearance of the framework. By adjusting these variables, you can easily customize the colors, typography, spacing, and other aspects of the styles.

## Contributing

Contributions to the SepCSS project are always welcome! If you'd like to contribute, please follow the guidelines outlined in the `CONTRIBUTING.md` file. You can contribute by reporting issues, suggesting improvements, or submitting pull requests.

## License

SepCSS is released under the MIT License. You can find the details in the `LICENSE` file.

## Acknowledgements

SepCSS is inspired by various CSS frameworks and design systems. We would like to thank all the contributors who have helped shape and improve the framework.
