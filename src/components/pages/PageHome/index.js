import React, { Component } from 'react';
import './style.css';

import Achievements from '../../blocks/Achievements';
import Contacts from '../../blocks/Contacts';

class PageHome extends Component {

    render() {
        const achievementItems = {
            'work': { header: 'Перевёрстка salon.ru', img: 'salon.jpg' },
            'draw': { header: 'Экскурсия в Карелии' },
            'read': { header: 'Богач, бедняк' },
            'cook': { header: 'Сырники под клюквенным соусом в духовке' }
        };

        return (
            <div>
                <Achievements achievementItems={achievementItems}/>
                <Contacts/>
            </div>
        );
    }
}

export default PageHome;