import React, { Component } from 'react';
import './style.css';

import Card from '../Card';

class Achievements extends Component {
    _getCard = (items, type) => {
        let cardAttrs = {
            'work': { tag: 'Работаю', size: 'large' },
            'draw': { tag: 'Рисую', size: 'medium' },
            'cook': { tag: 'Готовлю', size: 'small', last: true },
            'read': { tag: 'Читаю', size: 'small' }
        };

        if (type in items) {
            return (
				<Card
					size={ cardAttrs[type].size }
					tag={ cardAttrs[type].tag }
					header={ items[type].header }
					img={ items[type].img }
					last={ cardAttrs[type].last } />
            );
        }
    }

    render() {
        const achievementItems = this.props.achievementItems || {};

        return (
			<section className='achievements'>
					<h2>Последние достижения</h2>
					<div className='achievements__content row'>
						<div className='col-md-6'>
							{this._getCard(achievementItems, 'work')}
						</div>
						<div className='col-md-3'>
							{this._getCard(achievementItems, 'draw')}
						</div>
						<div className='col-md-3'>
							{this._getCard(achievementItems, 'read')}
							{this._getCard(achievementItems, 'cook')}
						</div>
					</div>
			</section>
        );
    }
}

export default Achievements;