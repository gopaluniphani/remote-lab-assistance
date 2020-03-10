import React, { Component } from "react";

import AceEditor from "react-ace";
import brace from "brace";

const languages = [
  "c_cpp",
  "javascript",
  "java",
  "python",
  "xml",
  "ruby",
  "sass",
  "markdown",
  "mysql",
  "json",
  "html",
  "css",
  "sql"
];

const themes = ["monokai", "textmate"];

languages.forEach(lang => require(`brace/mode/${lang}`));

themes.forEach(theme => require(`brace/theme/${theme}`));

class Labcycle extends Component {
  onChange(newValue) {
    this.setState({
      value: newValue
    });
  }

  setTheme(e) {
    this.setState({
      theme: e.target.value
    });
  }

  setMode(e) {
    this.setState({
      mode: e.target.value
    });
  }

  setFontSize(e) {
    this.setState({
      fontSize: parseInt(e.target.value, 10)
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      value: "",
      placeholder: "Type your code here",
      theme: "monokai",
      mode: "c_cpp",
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false,
      fontSize: 14,
      showGutter: true,
      showPrintMargin: true,
      highlightActiveLine: true,
      enableSnippets: false,
      showLineNumbers: true
    };

    this.setTheme = this.setTheme.bind(this);
    this.setMode = this.setMode.bind(this);
    this.onChange = this.onChange.bind(this);
    this.setFontSize = this.setFontSize.bind(this);
  }

  runCode = () => {
    console.log(this.state.value);
  };

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Editor Configuration
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0 ml-auto">
              <div className="form-group mr-sm-2">
                <label htmlFor="languages">Select Language:&nbsp;</label>
                <select
                  className="form-control"
                  name="mode"
                  onChange={this.setMode}
                  value={this.state.mode}
                >
                  {languages.map(lang => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group mr-sm-2">
                <label htmlFor="themes">Select Theme:&nbsp;</label>
                <select
                  className="form-control"
                  name="Theme"
                  onChange={this.setTheme}
                  value={this.state.theme}
                >
                  {themes.map(theme => (
                    <option key={theme} value={theme}>
                      {theme}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group mr-sm-2">
                <label htmlFor="font">Font Size:&nbsp;</label>
                <select
                  className="form-control"
                  name="Font Size"
                  onChange={this.setFontSize}
                  value={this.state.fontSize}
                >
                  {[14, 16, 18, 20, 24, 28, 32, 40].map(lang => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </form>
          </div>
        </nav>

        <div className="row">
          <div className="col-sm-9">
            <AceEditor
              placeholder={this.state.placeholder}
              mode={this.state.mode}
              theme={this.state.theme}
              onChange={this.onChange}
              value={this.state.value}
              fontSize={this.state.fontSize}
              setOptions={{
                useWorker: false,
                enableBasicAutocompletion: this.state.enableBasicAutocompletion,
                enableLiveAutocompletion: this.state.enableLiveAutocompletion,
                enableSnippets: this.state.enableSnippets,
                showLineNumbers: this.state.showLineNumbers,
                tabSize: 4
              }}
              width=""
            />
          </div>
          <div className="col-sm-3">
            <button className="btn btn-primary" onClick={this.runCode}>
              Run
            </button>
          </div>
        </div>

        <div style={{ height: "100%" }}></div>
      </div>
    );
  }
}

export default Labcycle;
