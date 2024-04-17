import React, { Component } from 'react';
import '../TextEditor/Editor.css'

class TextEditor extends Component {
  state = { 
    text: "ТеКсТ", 
    fontFamily: 'Arial', 
    fontSize: '16px',
    color: '#000000',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textDecoration: 'none',
    textTransform: 'none' 
  };

  handleInputChange = (event) => {
    this.setState({ text: event.target.value });
  }

  handleFontChange = (event) => {
    this.setState({ fontFamily: event.target.value });
  }

  handleFontSizeChange = (event) => {
    this.setState({ fontSize: event.target.value });
  }

  handleColorChange = (event) => {
    this.setState({ color: event.target.value });
  }

  toggleBold = () => {
    this.setState({ fontWeight: this.state.fontWeight === 'normal' ? 'bold' : 'normal' });
  }

  toggleItalic = () => {
    this.setState({ fontStyle: this.state.fontStyle === 'normal' ? 'italic' : 'normal' });
  }

  toggleUnderline = () => {
    this.setState({
      textDecoration: this.state.textDecoration === 'none' ? 'underline' : 'none'
    });
  }

  toggleCaps = () => {
    this.setState({
      textTransform: this.state.textTransform === 'none' ? 'uppercase' : 'none'
    });
  }

  render() {
    const { text, fontFamily, fontSize, color, fontWeight, fontStyle, textDecoration, textTransform } = this.state;
    return (
      <div>
        <h2>Текстовый редактор</h2>
        <div>
          <label>
            Шрифт:
            <select value={fontFamily} onChange={this.handleFontChange}>
              <option value="Arial">Arial</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Georgia">Georgia</option>
              <option value="Monospace">Monospace</option>
            </select>
          </label>
          <label>
            Размер шрифта:
            <select value={fontSize} onChange={this.handleFontSizeChange}>
              <option value="14px">14px</option>
              <option value="16px">16px</option>
              <option value="18px">18px</option>
              <option value="20px">20px</option>
            </select>
          </label>
          <label>
            Цвет:
            <input type="color" value={color} onChange={this.handleColorChange} />
          </label>
          <button onClick={this.toggleBold}>B</button>
          <button onClick={this.toggleItalic}>I</button>
          <button onClick={this.toggleUnderline}>U</button>
          <button onClick={this.toggleCaps}>Tt</button>
        </div>
<textarea
  value={text}
  onChange={this.handleInputChange}
  style={{
    fontFamily, 
    fontSize, 
    color, 
    fontWeight, 
    fontStyle, 
    textDecoration,
    textTransform,
    width: '100%', 
    height: '100px'
  }}
/>
      </div>
    );
}
}

export default TextEditor;
