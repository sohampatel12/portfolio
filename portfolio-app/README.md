# Portfolio Application

This is a simple portfolio application designed to showcase projects and skills as a software engineer. The application is structured to provide a clean and user-friendly interface for displaying project information.

## Project Structure

The project consists of the following files and directories:

```
portfolio-app
├── src
│   ├── index.html          # Main HTML file serving as the entry point
│   ├── styles
│   │   └── main.css       # CSS styles for the portfolio application
│   ├── templates
│   │   ├── project-card.html  # Template for individual project cards
│   │   └── project-list.html  # Template for displaying a list of project cards
│   └── scripts
│       └── main.js        # JavaScript code for dynamic content and interactivity
├── package.json            # Configuration file for npm
└── README.md               # Documentation for the project
```

## Getting Started

To set up and run the portfolio application, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd portfolio-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   Open `src/index.html` in your web browser to view the portfolio.

## Project Templates

The application includes templates for displaying projects:

- **Project Card**: Each project is represented by a card that includes:
  - Project Title
  - Project Description
  - Project Image
  - Links to the project

- **Project List**: A list that dynamically generates project cards using the project-card template.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.