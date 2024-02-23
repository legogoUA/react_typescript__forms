import React, { useState } from "react";
import "./PostForm.scss";

export const PostForm: React.FC = () => {
  const [userId, setUserId] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <form action="/api/posts" method="POST" className="box">
      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-danger"
            type="email"
            placeholder="Email input"
            value="hello@"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p className="help is-danger">This email is invalid</p>
      </div>

      <div className="field">
        <label className="label">Subject</label>
        <div className="control">
          <div className="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea className="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>

      <div className="field is-grouped">
        <button className="button is-link">Submit</button>
        <button className="button is-link is-light">Cancel</button>
      </div>
    </form>
  );
};
