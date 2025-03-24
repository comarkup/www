# CoMarkup

# CoMarkup

CoMarkup is a real-time code collaboration platform that enables instant rendering and preview of changes in various markup formats (Markdown, HTML, React). The project consists of two main components:

1. **[Firefox Plugin](https://github.com/comarkup/firefox)** - a browser extension that detects and renders React code
2. **[Render Server](https://github.com/comarkup/render-react)** - a local server that processes and renders JavaScript with React

## 🚀 Key Features

- Instant code rendering
- Real-time collaboration
- Git synchronization
- Responsive preview
- Custom themes
- Browser extensions

## 📋 Use Cases

### Development Teams
- Documentation collaboration
- Real-time code review
- Rapid component prototyping

### Content Creators
- Writing and editing documentation
- Creating technical blogs
- Preparing tutorials

### Companies
- Product documentation
- Internal wikis
- Training materials

### Education
- Interactive materials
- Student-teacher collaboration
- Code presentations

## 🔧 Installation and Setup

### Firefox Plugin

#### Temporary Installation:

1. Clone the repository:
   ```bash
   git clone https://github.com/comarkup/firefox
   ```
2. In Firefox, navigate to `about:debugging`
3. Click "This Firefox"
4. Click "Load Temporary Add-on"
5. Select the `manifest.json` file from the directory

#### Manual Installation from Downloaded Files:

1. Create a new folder for the plugin
2. Copy the code to the appropriate files (manifest.json and content.js)
3. Download the required libraries:
   ```bash
   curl -O https://unpkg.com/react@17/umd/react.development.js
   curl -O https://unpkg.com/react-dom@17/umd/react-dom.development.js
   curl -O https://unpkg.com/babel-standalone@6/babel.min.js
   ```

#### Publishing on Firefox Marketplace:

1. Prepare a package:
   - Create a zip file containing all plugin files
   - Add screenshots of the plugin in action
   - Prepare icons in sizes 48x48, 96x96, and 128x128 px

2. Create a developer account:
   - Go to https://addons.mozilla.org/developers/
   - Register as a developer

3. Submit the add-on:
   - Log in to your developer account
   - Click "Submit a New Add-on"
   - Choose "Upload Your Add-on"
   - Upload the prepared zip file

### Render Server

1. Clone the repository:
   ```bash
   git clone https://github.com/comarkup/render-react
   ```

2. Grant execution permissions:
   ```bash
   chmod +x setup.sh
   ```

3. Run the installation script:
   ```bash
   ./setup.sh
   ```

4. Start the server:
   ```bash
   npm start
   ```

## 🔌 Project Structure

### Firefox Plugin

```
firefox-plugin/
├── manifest.json
├── content.js
├── popup.html
├── popup.js
├── lib/
│   ├── react.development.js
│   ├── react-dom.development.js
│   └── babel.min.js
└── icons/
    ├── icon-48.png
    ├── icon-96.png
    └── icon-128.png
```

### Render Server

```
render-server/
├── node_modules/
├── public/
│   └── index.html
├── package.json
├── package-lock.json
├── server.js
├── .gitignore
└── setup.sh
```

## 👩‍💻 Functionality

### Firefox Plugin

1. **Automatic React Code Detection**:
   - Scans the page every 2 seconds for `<pre>` and `<code>` elements
   - Detects React code based on characteristic keywords
   - Adds a "Render" button only to fragments containing React code

2. **Code Rendering**:
   - After clicking the "Render" button, a popup opens
   - The popup contains the rendered version of the React component
   - Uses React, ReactDOM, and Babel for compilation and rendering

3. **Additional Features**:
   - Ability to copy the rendered HTML to the clipboard
   - Rendering error handling
   - Popup close button

### Render Server

1. **Component Rendering API**:
   - `/render` endpoint accepting React code in JSON format
   - Code transformation through Babel
   - Rendering React components to HTML
   - Returning the rendered code

2. **Frontend Editor**:
   - Editor with ability to paste React code
   - Automatic preview refresh after each change (with 1-second delay)
   - Syntax and rendering error handling
   - Status highlighting (loading, error, success)
   - Responsive layout with editor and preview sections
   - Clipboard paste functionality

## 🧪 Testing

### Testing the Firefox Plugin

1. Install the plugin according to the instructions
2. Visit a page with React code (e.g., React documentation)
3. Check if "Render" buttons appear next to code blocks
4. Click the button and verify that the popup with the rendered component appears correctly

### Testing the Render Server

1. Start the server according to the instructions
2. Use curl to send a simple component:
   ```bash
   curl -X POST \
     http://localhost:3001/render \
     -H "Content-Type: application/json" \
     -d '{"code": "function ExampleComponent() { return React.createElement('\''div'\'', null, '\''Hello'\'') }"}'
   ```
3. Check if the server returns the correct HTML

## 📝 Sample Components for Testing

### Simple Component

```jsx
function SimpleComponent() {
  return (
    <div className="p-4 bg-blue-100">
      <h2 className="text-xl font-bold">Hello CoMarkup!</h2>
      <p>This is a simple React component.</p>
    </div>
  );
}
```

### Component with Hooks

```jsx
function TestComponent() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="p-4 bg-blue-100">
      <h1 className="text-xl font-bold">Counter Component</h1>
      <p>Current count: {count}</p>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}
```

## 🔍 Supported React Features

- Full React components
- JSX syntax
- Styled components
- React Hooks
- Tailwind CSS classes

## 🛡️ Security

- Server performs code transformation through Babel
- Frontend uses dangerouslySetInnerHTML only for verified HTML
- CORS implementation for secure communication between server and client

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 📞 Contact

Project Link: [https://github.com/comarkup](https://github.com/comarkup)





## PL:
CoMarkup to platforma do współpracy nad kodem w czasie rzeczywistym, umożliwiająca natychmiastowe renderowanie i podgląd zmian w różnych formatach znaczników (Markdown, HTML, React). Projekt składa się z dwóch głównych komponentów:

1. **[Firefox Plugin](https://github.com/comarkup/firefox)** - dodatek do przeglądarki wykrywający i renderujący kod React
2. **[Render Server](https://github.com/comarkup/render-react)** - serwer lokalny przetwarzający i renderujący JavaScript z React

## 🚀 Kluczowe funkcje

- Natychmiastowe renderowanie kodu
- Współpraca w czasie rzeczywistym
- Synchronizacja z Git
- Responsywny podgląd
- Własne motywy
- Rozszerzenia przeglądarek

## 📋 Zastosowania

### Zespoły Developerskie
- Współpraca nad dokumentacją
- Code review w czasie rzeczywistym
- Szybkie prototypowanie komponentów

### Twórcy Treści
- Pisanie i edycja dokumentacji
- Tworzenie blogów technicznych
- Przygotowywanie tutoriali

### Firmy
- Dokumentacja produktowa
- Wewnętrzne wiki
- Materiały szkoleniowe

### Edukacja
- Interaktywne materiały
- Współpraca student-nauczyciel
- Prezentacje kodu

## 🔧 Instalacja i konfiguracja

### Firefox Plugin

#### Instalacja tymczasowa:

1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/comarkup/firefox
   ```
2. W Firefox przejdź do `about:debugging`
3. Kliknij "This Firefox"
4. Kliknij "Load Temporary Add-on"
5. Wybierz plik `manifest.json` z katalogu

#### Ręczna instalacja z pobranych plików:

1. Utwórz nowy folder dla pluginu
2. Skopiuj kod do odpowiednich plików (manifest.json i content.js)
3. Pobierz wymagane biblioteki:
   ```bash
   curl -O https://unpkg.com/react@17/umd/react.development.js
   curl -O https://unpkg.com/react-dom@17/umd/react-dom.development.js
   curl -O https://unpkg.com/babel-standalone@6/babel.min.js
   ```

#### Publikacja w Firefox Marketplace:

1. Przygotuj paczkę:
   - Stwórz plik zip zawierający wszystkie pliki pluginu
   - Dodaj zrzuty ekranu pluginu w akcji
   - Przygotuj ikonę w rozmiarach 48x48, 96x96 i 128x128 px

2. Utwórz konto developerskie:
   - Wejdź na https://addons.mozilla.org/developers/
   - Zarejestruj się jako developer

3. Prześlij dodatek:
   - Zaloguj się na konto developerskie
   - Kliknij "Submit a New Add-on"
   - Wybierz "Upload Your Add-on"
   - Prześlij przygotowany plik zip

### Render Server

1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/comarkup/render-react
   ```

2. Nadaj uprawnienia do wykonania:
   ```bash
   chmod +x setup.sh
   ```

3. Uruchom skrypt instalacyjny:
   ```bash
   ./setup.sh
   ```

4. Uruchom serwer:
   ```bash
   npm start
   ```

## 🔌 Struktura projektu

### Firefox Plugin

```
firefox-plugin/
├── manifest.json
├── content.js
├── popup.html
├── popup.js
├── lib/
│   ├── react.development.js
│   ├── react-dom.development.js
│   └── babel.min.js
└── icons/
    ├── icon-48.png
    ├── icon-96.png
    └── icon-128.png
```

### Render Server

```
render-server/
├── node_modules/
├── public/
│   └── index.html
├── package.json
├── package-lock.json
├── server.js
├── .gitignore
└── setup.sh
```

## 👩‍💻 Funkcjonalności

### Firefox Plugin

1. **Automatyczna detekcja kodu React**:
   - Skanuje stronę co 2 sekundy w poszukiwaniu elementów `<pre>` i `<code>`
   - Wykrywa kod React na podstawie charakterystycznych słów kluczowych
   - Dodaje przycisk "Renderuj" tylko do fragmentów zawierających kod React

2. **Renderowanie kodu**:
   - Po kliknięciu przycisku "Renderuj" otwiera się popup
   - Popup zawiera wyrenderowaną wersję komponentu React
   - Wykorzystuje React, ReactDOM i Babel do kompilacji i renderowania

3. **Dodatkowe funkcje**:
   - Możliwość kopiowania wyrenderowanego HTML do schowka
   - Obsługa błędów renderowania
   - Przycisk zamykania popupu

### Render Server

1. **API do renderowania komponentów**:
   - Endpoint `/render` przyjmujący kod React w formacie JSON
   - Transformacja kodu przez Babel
   - Renderowanie komponentów React do HTML
   - Zwracanie wyrenderowanego kodu

2. **Edytor frontendowy**:
   - Edytor z możliwością wklejania kodu React
   - Automatyczne odświeżanie podglądu po każdej zmianie (z 1-sekundowym opóźnieniem)
   - Obsługa błędów składni i renderowania
   - Podświetlanie statusu (ładowanie, błąd, sukces)
   - Responsywny układ z podziałem na edytor i podgląd
   - Możliwość wklejania ze schowka

## 🧪 Testowanie

### Test Firefox Plugin

1. Zainstaluj plugin zgodnie z instrukcją
2. Odwiedź stronę z kodem React (np. dokumentację React)
3. Sprawdź, czy przyciski "Renderuj" pojawiają się przy blokach kodu
4. Kliknij przycisk i sprawdź, czy popup z wyrenderowanym komponentem pojawia się poprawnie

### Test Render Server

1. Uruchom serwer zgodnie z instrukcją
2. Użyj curl do wysłania prostego komponentu:
   ```bash
   curl -X POST \
     http://localhost:3001/render \
     -H "Content-Type: application/json" \
     -d '{"code": "function ExampleComponent() { return React.createElement('\''div'\'', null, '\''Hello'\'') }"}'
   ```
3. Sprawdź, czy serwer zwraca poprawny HTML

## 📝 Przykładowe komponenty do testowania

### Prosty komponent

```jsx
function SimpleComponent() {
  return (
    <div className="p-4 bg-blue-100">
      <h2 className="text-xl font-bold">Hello CoMarkup!</h2>
      <p>This is a simple React component.</p>
    </div>
  );
}
```

### Komponent z hookami

```jsx
function TestComponent() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="p-4 bg-blue-100">
      <h1 className="text-xl font-bold">Counter Component</h1>
      <p>Current count: {count}</p>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}
```

## 🔍 Obsługiwane funkcje React

- Pełne komponenty React
- JSX składnia
- Styled components
- Hooki React
- Tailwind CSS classes

## 🛡️ Bezpieczeństwo

- Server wykonuje transformację kodu przez Babel
- Frontend używa dangerouslySetInnerHTML tylko dla zweryfikowanego HTML
- Implementacja CORS dla bezpiecznej komunikacji między serwerem a klientem

## 🤝 Wkład w projekt

1. Forknij repozytorium
2. Stwórz branch z funkcjonalnością (`git checkout -b feature/amazing-feature`)
3. Commituj zmiany (`git commit -m 'Add some amazing feature'`)
4. Push do brancha (`git push origin feature/amazing-feature`)
5. Otwórz Pull Request



## 📞 Kontakt

Link do projektu: [https://github.com/comarkup](https://github.com/comarkup)
