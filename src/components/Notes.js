import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export const Notes = ({ notes, onRemove }) => (
  <TransitionGroup component="ul" className="list-group">{notes.map(n => (
    <CSSTransition
      key={n.id} 
      classNames={'note'}
      timeout={800}>
      <li className="list-group-item note">
        <div>
          <strong>{n.title}</strong>
          <small>{n.date}</small>
        </div>
        <button type="button"
          className="btn btn-out;ine-danger btn-sm"
          onClick={() => onRemove(n.id)}>&times;</button>
      </li>
    </CSSTransition>))}
  </TransitionGroup>
)

