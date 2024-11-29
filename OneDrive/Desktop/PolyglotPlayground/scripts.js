
const languageTiles = document.querySelectorAll(".language-tile");
const languageName = document.getElementById("language-name");
const languageDescription = document.getElementById("language-description");

const languageDetails = {
  Python: "The backbone of this app, Python can integrate with all these languages.",
  "C++": "Used for performance-critical tasks via Python's ctypes and Cython.",
  Java: "Interacts with Python through Jython, running Python on JVM.",
  JavaScript: "Execute Python in the browser using PyScript.",
  R: "Integrates with Python using rpy2 for advanced statistics and visualization.",
  Go: "Gopy bridges Python with Go for concurrent tasks.",
  Fortran: "Python can call Fortran code via f2py, especially in scientific computing.",
  MATLAB: "MATLAB Engine API allows Python to control MATLAB scripts.",
  ".NET": "Python.NET enables Python to interact with the .NET framework.",
  Scala: "Python communicates with JVM-based Scala using Py4J.",
  Ruby: "PyCall allows Python to call Ruby scripts seamlessly.",
  SQL: "Python's SQLAlchemy and SQLite libraries simplify database management.",
  PHP: "Integrate PHP and Python using phpserialize and PyPHP.",
  Perl: "Use Python to handle Perl-like regular expressions and scripts.",
  Haskell: "HPy enables Python to interact with Haskell code.",
  "Shell/Bash": "Python executes shell commands using the subprocess module.",
  Swift: "PySwift bridges Python and Swift for iOS and macOS apps.",
  Lua: "Lunatic-Python allows Lua and Python integration for game scripting.",
  Tcl: "Python's tkinter GUI library is built on Tcl.",
  COBOL: "Legacy system integration is possible through COBOL bridges."
};

languageTiles.forEach(tile => {
  tile.addEventListener("click", () => {
    const language = tile.dataset.language;
    languageName.textContent = language;
    languageDescription.textContent = languageDetails[language];
  });
});

const languageExamples = {
  Python: "Example: A simple Python 'Hello, World!':\n\nprint('Hello, World!')",
  "C++": "Example: Python calling C++ code for fast calculations using ctypes.",
  Java: "Example: Python and Java interacting through Jython for JVM tasks.",
  JavaScript: "Example: Python running in the browser using PyScript.",
  R: "Example: Python sending data to R for statistical analysis via rpy2.",
  Go: "Example: Python calling Go functions using gopy.",
  Fortran: "Example: Python calling Fortran code with f2py for fast scientific computing.",
  MATLAB: "Example: Python controlling MATLAB Engine API for advanced mathematical tasks.",
  ".NET": "Example: Python.NET interacting with C# for .NET framework.",
  Scala: "Example: Python and Scala communication through Py4J.",
  Ruby: "Example: Python calling Ruby scripts using PyCall.",
  SQL: "Example: Python executing SQL queries using SQLite3 or SQLAlchemy.",
  PHP: "Example: Python passing data to PHP for dynamic web applications.",
  Perl: "Example: Python handling complex regex using Perl-compatible libraries.",
  Haskell: "Example: Python calling Haskell functions with HPy.",
  "Shell/Bash": "Example: Python executing Shell commands with the subprocess module.",
  Swift: "Example: Python interacting with Swift using PySwift.",
  Lua: "Example: Python embedding Lua scripts with Lunatic-Python.",
  Tcl: "Example: Python controlling Tcl scripts using tkinter.",
  COBOL: "Example: Python interacting with legacy COBOL code through custom bridges."
};

// Update detail section with an example when a tile is clicked
languageTiles.forEach(tile => {
  tile.addEventListener("click", () => {
    const language = tile.dataset.language;
    languageName.textContent = language;
    languageDescription.textContent = languageDetails[language];
    if (languageExamples[language]) {
      const exampleText = document.createElement("pre");
      exampleText.textContent = languageExamples[language];
      languageDescription.appendChild(exampleText);
    }
  });
});

const languageCodeExamples = {
  "Python": `print('Hello, World!')
# Basic Python program`,
  "C++": `#include <iostream>
int main() {
    std::cout << "Hello, World!";
    return 0;
}`,
  "Java": `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
  "JavaScript": `console.log('Hello, World!');`,
  "R": `print('Hello, World!')`,
  "Go": `package main
import "fmt"
func main() {
    fmt.Println("Hello, World!")
}`,
  "Fortran": `program HelloWorld
    print *, 'Hello, World!'
end program HelloWorld`,
  "MATLAB": `disp('Hello, World!')`,
  ".NET": `using System;
class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`,
  "Scala": `object HelloWorld {
    def main(args: Array[String]) = {
        println("Hello, World!")
    }
}`,
  "Ruby": `puts 'Hello, World!'`,
  "SQL": `SELECT 'Hello, World!';`,
  "PHP": `<?php
echo 'Hello, World!';
?>`,
  "Perl": `print "Hello, World!\n";`,
  "Haskell": `main = putStrLn "Hello, World!"`,
  "Shell/Bash": `#!/bin/bash
echo 'Hello, World!'`,
  "Swift": `print("Hello, World!")`,
  "Lua": `print("Hello, World!")`,
  "Tcl": `puts "Hello, World!"`,
  "COBOL": `IDENTIFICATION DIVISION.
PROGRAM-ID. HelloWorld.
PROCEDURE DIVISION.
    DISPLAY 'Hello, World!'.
    STOP RUN.`
};

// Add coded examples dynamically
languageTiles.forEach(tile => {
  tile.addEventListener("click", () => {
    const language = tile.dataset.language;
    languageName.textContent = language;
    languageDescription.textContent = languageDetails[language];
    if (languageExamples[language]) {
      const exampleText = document.createElement("pre");
      exampleText.textContent = languageExamples[language];
      languageDescription.appendChild(exampleText);
    }
    if (languageCodeExamples[language]) {
      const codeText = document.createElement("pre");
      codeText.style.background = "#111";
      codeText.style.color = "#00ffcc";
      codeText.style.padding = "10px";
      codeText.style.borderRadius = "5px";
      codeText.textContent = languageCodeExamples[language];
      languageDescription.appendChild(codeText);
    }
  });
});

const languageVisualizations = {
  Python: "<div style='background: #1a1a1a; padding: 10px;'>Visualize Python: Run Python code directly in an interpreter to see the output!</div>",
  "C++": "<div style='background: #1a1a1a; padding: 10px;'>Visualize C++: Use an online compiler to run this code and see the result!</div>",
  Java: "<div style='background: #1a1a1a; padding: 10px;'>Visualize Java: Compile and run this program in a Java IDE like IntelliJ IDEA.</div>",
  JavaScript: "<div style='background: #1a1a1a; padding: 10px;'>Visualize JavaScript: Open the browser console to execute the code!</div>",
  R: "<div style='background: #1a1a1a; padding: 10px;'>Visualize R: Use RStudio to execute and visualize data analysis tasks.</div>",
  Go: "<div style='background: #1a1a1a; padding: 10px;'>Visualize Go: Run this program in the Go Playground or your terminal.</div>",
  Fortran: "<div style='background: #1a1a1a; padding: 10px;'>Visualize Fortran: Use GFortran to compile and execute this program.</div>",
  MATLAB: "<div style='background: #1a1a1a; padding: 10px;'>Visualize MATLAB: Run this in the MATLAB IDE to see the results!</div>",
  ".NET": "<div style='background: #1a1a1a; padding: 10px;'>Visualize .NET: Use Visual Studio to execute this .NET program.</div>",
  Scala: "<div style='background: #1a1a1a; padding: 10px;'>Visualize Scala: Run this in an IDE like IntelliJ with the Scala plugin.</div>",
  Ruby: "<div style='background: #1a1a1a; padding: 10px;'>Visualize Ruby: Use IRB or an online Ruby interpreter to see the output.</div>",
  SQL: "<div style='background: #1a1a1a; padding: 10px;'>Visualize SQL: Use a database client like pgAdmin or MySQL Workbench.</div>",
  PHP: "<div style='background: #1a1a1a; padding: 10px;'>Visualize PHP: Run this code in a local server like XAMPP.</div>",
  Perl: "<div style='background: #1a1a1a; padding: 10px;'>Visualize Perl: Execute this code in the Perl interpreter to see the output.</div>",
  Haskell: "<div style='background: #1a1a1a; padding: 10px;'>Visualize Haskell: Use GHC or an online Haskell IDE.</div>",
  "Shell/Bash": "<div style='background: #1a1a1a; padding: 10px;'>Visualize Shell/Bash: Run this script in your terminal.</div>",
  Swift: "<div style='background: #1a1a1a; padding: 10px;'>Visualize Swift: Use Xcode to execute this program.</div>",
  Lua: "<div style='background: #1a1a1a; padding: 10px;'>Visualize Lua: Use Lua's interpreter to execute this script.</div>",
  Tcl: "<div style='background: #1a1a1a; padding: 10px;'>Visualize Tcl: Run this program in a Tcl interpreter.</div>",
  COBOL: "<div style='background: #1a1a1a; padding: 10px;'>Visualize COBOL: Compile and execute this program with a COBOL compiler like GnuCOBOL.</div>"
};

// Add visualizations dynamically
languageTiles.forEach(tile => {
  tile.addEventListener("click", () => {
    const language = tile.dataset.language;
    languageName.textContent = language;
    languageDescription.textContent = languageDetails[language];
    if (languageExamples[language]) {
      const exampleText = document.createElement("pre");
      exampleText.textContent = languageExamples[language];
      languageDescription.appendChild(exampleText);
    }
    if (languageCodeExamples[language]) {
      const codeText = document.createElement("pre");
      codeText.style.background = "#111";
      codeText.style.color = "#00ffcc";
      codeText.style.padding = "10px";
      codeText.style.borderRadius = "5px";
      codeText.textContent = languageCodeExamples[language];
      languageDescription.appendChild(codeText);
    }
    if (languageVisualizations[language]) {
      const visualization = document.createElement("div");
      visualization.innerHTML = languageVisualizations[language];
      visualization.style.marginTop = "15px";
      languageDescription.appendChild(visualization);
    }
  });
});

const languageFunctionalPrograms = {
  Python: "<iframe src='https://trinket.io/python' style='width: 100%; height: 400px; border: none;'></iframe>",
  "C++": "<div>Run C++ programs in an online IDE like <a href='https://www.onlinegdb.com/online_c++_compiler' target='_blank'>OnlineGDB</a>.</div>",
  Java: "<div>Run Java programs in <a href='https://www.jdoodle.com/java-online-compiler/' target='_blank'>JDoodle</a>.</div>",
  JavaScript: "<iframe src='https://jsfiddle.net/' style='width: 100%; height: 400px; border: none;'></iframe>",
  R: "<div>Run R scripts in <a href='https://rdrr.io/snippets/' target='_blank'>R Snippets</a>.</div>",
  Go: "<div>Run Go programs in the <a href='https://go.dev/play/' target='_blank'>Go Playground</a>.</div>",
  Fortran: "<div>Run Fortran code in <a href='https://repl.it/languages/fortran' target='_blank'>Replit</a>.</div>",
  MATLAB: "<div>Run MATLAB code in the <a href='https://octave-online.net/' target='_blank'>Octave Online</a> IDE.</div>",
  ".NET": "<div>Run .NET programs in <a href='https://dotnetfiddle.net/' target='_blank'>DotNetFiddle</a>.</div>",
  Scala: "<div>Run Scala code in the <a href='https://scastie.scala-lang.org/' target='_blank'>Scala Scastie</a>.</div>",
  Ruby: "<iframe src='https://repl.it/languages/ruby' style='width: 100%; height: 400px; border: none;'></iframe>",
  SQL: "<div>Try SQL queries in <a href='https://sqliteonline.com/' target='_blank'>SQLiteOnline</a>.</div>",
  PHP: "<div>Run PHP scripts in <a href='https://www.onlinegdb.com/online_php_compiler' target='_blank'>OnlineGDB</a>.</div>",
  Perl: "<div>Run Perl code in <a href='https://www.tutorialspoint.com/execute_perl_online.php' target='_blank'>TutorialsPoint</a>.</div>",
  Haskell: "<div>Run Haskell programs in <a href='https://repl.it/languages/haskell' target='_blank'>Replit</a>.</div>",
  "Shell/Bash": "<div>Execute Bash scripts in <a href='https://www.tutorialspoint.com/execute_bash_online.php' target='_blank'>TutorialsPoint</a>.</div>",
  Swift: "<div>Run Swift code in <a href='https://swiftfiddle.com/' target='_blank'>SwiftFiddle</a>.</div>",
  Lua: "<iframe src='https://www.lua.org/demo.html' style='width: 100%; height: 400px; border: none;'></iframe>",
  Tcl: "<div>Run Tcl scripts in a local interpreter or explore <a href='https://www.tcl.tk/' target='_blank'>Tcl resources</a>.</div>",
  COBOL: "<div>Try COBOL programs in <a href='https://www.tutorialspoint.com/execute_cobol_online.php' target='_blank'>TutorialsPoint</a>.</div>"
};

// Add functional programs dynamically
languageTiles.forEach(tile => {
  tile.addEventListener("click", () => {
    const language = tile.dataset.language;
    languageName.textContent = language;
    languageDescription.textContent = languageDetails[language];
    if (languageExamples[language]) {
      const exampleText = document.createElement("pre");
      exampleText.textContent = languageExamples[language];
      languageDescription.appendChild(exampleText);
    }
    if (languageCodeExamples[language]) {
      const codeText = document.createElement("pre");
      codeText.style.background = "#111";
      codeText.style.color = "#00ffcc";
      codeText.style.padding = "10px";
      codeText.style.borderRadius = "5px";
      codeText.textContent = languageCodeExamples[language];
      languageDescription.appendChild(codeText);
    }
    if (languageVisualizations[language]) {
      const visualization = document.createElement("div");
      visualization.innerHTML = languageVisualizations[language];
      visualization.style.marginTop = "15px";
      languageDescription.appendChild(visualization);
    }
    if (languageFunctionalPrograms[language]) {
      const functionalProgram = document.createElement("div");
      functionalProgram.innerHTML = languageFunctionalPrograms[language];
      functionalProgram.style.marginTop = "20px";
      languageDescription.appendChild(functionalProgram);
    }
  });
});
