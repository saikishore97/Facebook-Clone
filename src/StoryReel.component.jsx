import React from 'react';
import './StoryReel.styles.css';
import Story from './Story.component';

function StoryReel() {
    return (
        <div className="storyreel">
            <Story image="https://static01.nyt.com/images/2020/09/01/us/politics/01whattowatch/merlin_176352096_f44bccc8-1a5a-458d-acb5-bfd147ad3201-superJumbo.jpg?quality=90&auto=webp"
                   profilepic="https://okrp.com/wp-content/uploads/2013/03/nytimes-logo-copy-320x320.jpg"
                   profilename="The New York Times"/>
            <Story image="https://pmcvariety.files.wordpress.com/2017/08/bruno-mars-versace.jpg"
                   profilepic="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/45221546_10156903736892244_33857360338354176_o.jpg?_nc_cat=1&_nc_sid=09cbfe&_nc_ohc=dyP5NRwOTZ4AX8QYkan&_nc_ht=scontent-ort2-1.xx&oh=cbc26ca19cd6ce9665b906deca421dac&oe=5F73EAD5"
                   profilename="Bruno Mars"/>
            <Story image="https://i.pinimg.com/originals/2f/2f/e2/2f2fe206f3214093da46e4a4c4eb8255.jpg"
                   profilepic="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/11041829_10153068245437488_7386101411081392774_n.jpg?_nc_cat=1&_nc_sid=09cbfe&_nc_ohc=A1jiPd8cH50AX99tUEr&_nc_ht=scontent-ort2-1.xx&oh=6476d7cb1020d8ff69cec661dac0d500&oe=5F7440E2"
                   profilename="Marvel"/>
            <Story image="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/73395302_10156596342531961_7908104633929695232_n.jpg?_nc_cat=100&_nc_sid=e3f864&_nc_ohc=hew-RIHrs1oAX_yZRbS&_nc_ht=scontent-ort2-1.xx&oh=be60fbcfeaf533e87088ea3809af6d1d&oe=5F76298B"
                   profilepic="https://www.theafricareport.com/media/2020/04/billgatesal-jpg-288295-original-732x419.jpg"
                   profilename="Bill Gates"/>
            <Story image="https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/19575079_10103832396388711_8894816584589808440_o.jpg?_nc_cat=109&_nc_sid=e3f864&_nc_ohc=Zl-6KxEwB2QAX8S7b8m&_nc_ht=scontent-ort2-1.xx&oh=74dc62aac3853a7e7cf76610fa0475fb&oe=5F73573B"
                   profilepic="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/79515135_10111007623880301_5111576226921709568_o.jpg?_nc_cat=1&_nc_sid=09cbfe&_nc_ohc=YWMNoaXWeAIAX_RJ0ED&_nc_ht=scontent-ort2-1.xx&oh=b38db68adc9842bddc76810be02145ac&oe=5F74C487"
                   profilename="Mark Zuckerberg"/>
        </div>
    )
}

export default StoryReel;
