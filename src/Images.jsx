import React, { useState } from "react";
import "./forimages.css";

export default function Images({ images}) {

  const [hover, setHover] = useState(false);
  return (
    <>
      <h1>Photo Gallery</h1>
      <div className="photo-grid">
        
        <div
          className="card card-tall card-wide"
          style={{
            position: 'relative',
            backgroundImage:
              'url("https://images.unsplash.com/photo-1558981359-219d6364c9c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80")',
          }}
        >
        </div>
        <div
          className="card card-tall"
          style={{
            position: 'relative',
            position: 'relative',
            backgroundImage:
              'url("https://images.unsplash.com/photo-1583585635793-0e1894c169bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=913&q=80")',
          }}
        >
        </div>
        <div
          className="card"
          style={{
            position: 'relative',
            backgroundImage:
              'url("https://images.unsplash.com/photo-1583531172005-814191b8b6c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80")',
          }}
        >
        </div>
        <div
          className="card"
          style={{
            position: 'relative',
            backgroundImage:
              'url("https://images.unsplash.com/photo-1583426573939-97d09302d76a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80")',
          }}
        >
        </div>
        <div
          className="card"
          style={{
            position: 'relative',
            backgroundImage:
              'url("https://images.unsplash.com/photo-1583532452513-a02186582ccd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")',
          }}
        >
        </div>
        <div
          className="card"
          style={{
            position: 'relative',
            backgroundImage:
              'url("https://images.unsplash.com/photo-1583445013765-46c20c4a6772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")',
          }}
        >
        </div>
        <div
          className="card card-wide"
          style={{
            position: 'relative',
            backgroundImage:
              'url("https://images.unsplash.com/photo-1583562835057-a62d1beffbf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=949&q=80")',
          }}
        >
        </div>
        <div
          className="card"
          style={{
            position: 'relative',
            backgroundImage:
              'url("https://images.unsplash.com/photo-1583483425010-c566431a7710?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80")',
          }}
        >
        </div>
        <div
          className="card"
          style={{
            position: 'relative',
            backgroundImage:
              'url("https://images.unsplash.com/photo-1583500557349-fb5238f8d946?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80")',
          }}
        >
        </div>
        <div
          className="card card-tall"
          style={{
            position: 'relative',
            backgroundImage:
              'url("https://images.unsplash.com/photo-1583468323330-9032ad490fed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80")',
          }}
        >
        </div>
        <div
          className="card card-tall"
          style={{
            position: 'relative',
            backgroundImage:
              'url("https://images.unsplash.com/photo-1583425423320-2386622cd2e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1980&q=80")',
          }}
        >
        </div>
        <div
          className="card card-wide"
          style={{
            position: 'relative',
            backgroundImage:
              'url("https://images.unsplash.com/photo-1583518257225-f9a8081f6a84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")',
          }}
        >
        </div>
        {images &&
          images.map((ImageURL, index) => {
            return (
              <div
                key={index}
                className={`
                card 
                 ${index ===1  && "card-wide"} 
                `}
                style={{
                  position: 'relative',
                  backgroundImage: `url(${ImageURL})`,
                  backgroundSize: 'cover',
                }}
              >
              </div>
            );
          })}
      </div>
    </>
  );
}


