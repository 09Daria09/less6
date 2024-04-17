import React, { Component } from 'react';

class PhotoUploadForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            currentPhoto: null,
            brightness: 100,
            contrast: 100,
            saturation: 100,
            hue: 0,
            blur: 0 
        };
    }

    handlePhotoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const newPhoto = {
                photo: file,
                photoURL: URL.createObjectURL(file)
            };
            this.setState({
                currentPhoto: newPhoto
            });
        }
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.currentPhoto) {
            const editedPhoto = {
                ...this.state.currentPhoto,
                brightness: this.state.brightness,
                contrast: this.state.contrast,
                saturation: this.state.saturation,
                hue: this.state.hue,
                blur: this.state.blur
            };
            this.setState(prevState => ({
                photos: [...prevState.photos, editedPhoto] 
            }));
        }
    };

    render() {
        const { currentPhoto, brightness, contrast, saturation, hue, blur } = this.state;
        return (
            <div>
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <form onSubmit={this.handleSubmit} style={{ marginBottom: '20px' }}>
                    <input type="file" accept="image/*" onChange={this.handlePhotoChange} />
                    
                    <div>Яркость: <input type="range" min="0" max="200" name="brightness" value={brightness} onChange={this.handleInputChange} /></div>
                    <div>Контрастность: <input type="range" min="0" max="200" name="contrast" value={contrast} onChange={this.handleInputChange} /></div>
                    <div>Насыщенность: <input type="range" min="0" max="200" name="saturation" value={saturation} onChange={this.handleInputChange} /></div>
                    <div>Оттенок: <input type="range" min="-180" max="180" name="hue" value={hue} onChange={this.handleInputChange} /></div>
                    <div>Размытие: <input type="range" min="0" max="10" step="0.1" name="blur" value={blur} onChange={this.handleInputChange} /></div>
                    
                    <button type="submit">Добавить в галерею</button>
                </form>

                {currentPhoto && (
                    <div style={{ marginBottom: '20px' }}>
                        <img src={currentPhoto.photoURL} alt="Preview" 
                        style={{ filter: `brightness(${brightness}%) 
                        contrast(${contrast}%) saturate(${saturation}%) 
                        hue-rotate(${hue}deg) blur(${blur}px)`, 
                        maxWidth: '400px' }} />
                    </div>
                )}
             </div>
                <div style={{ display: 'flex', overflowX: 'auto', marginBottom: '20px'}}>
                    {this.state.photos.map((photo, index) => (
                        <div key={index} style={{ marginRight: '10px' }}>
                            <img src={photo.photoURL} alt={`Edited ${index}`} 
                            style={{ filter: `brightness(${photo.brightness}%) 
                            contrast(${photo.contrast}%) 
                            saturate(${photo.saturation}%) 
                            hue-rotate(${photo.hue}deg) 
                            blur(${photo.blur}px)`, width: '160px', height: '250px' }} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default PhotoUploadForm;
