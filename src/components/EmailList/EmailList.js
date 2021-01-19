import { Checkbox, IconButton } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import "./EmailList.css"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide'
import SettingsIcon from '@material-ui/icons/Settings'
import InboxIcon from '@material-ui/icons/Inbox'
import PeopleIcon from '@material-ui/icons/People'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'

import Section from '../Section/Section'
import EmailRow from '../EmailRow/EmailRow'
import { db } from '../../firebase/firebase'


const EmailList = () => {

    const [emails, setEmails] = useState([]);
    useEffect(() => {
        db.collection('emails')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
                setEmails(snapshot.docs.map((d) => ({
                    id: d.id,
                    data: d.data(),

                }))))
    }, [])


    return (
        <div className="email__list">

            <div className="email__list__settings">
                <div className="email__list__settings__left">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <div className="email__list__settings__right">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="email__list_sections">
                <Section Icon={InboxIcon} title="primary" color="red" selected />
                <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
                <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
            </div>

            <div className="email__list__list">
                {
                    emails.map(({ id, data: { to, subject, message, timestamp } }) => (
                        <EmailRow
                            id={id}
                            key={id}
                            title={to}
                            subject={subject}
                            description={message}
                            time={new Date(timestamp?.seconds * 1000).toUTCString()}

                        />
                    ))
                }
                <EmailRow

                    title="Twitch"
                    subject="Hey fellow streamer!!!"
                    description="This is a test"
                    time="10pm"
                />
                <EmailRow

                    title="Twitch"
                    subject="Hey fellowsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa streamer!!!"
                    description="This is a test"
                    time="10pm"
                />
                <EmailRow

                    title="Twitch"
                    subject="Hey fellowsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa streamer!!!"
                    description="This is a test"
                    time="10pm"
                />
                <EmailRow

                    title="Twitch"
                    subject="Hey fellowsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa streamer!!!"
                    description="This is a test"
                    time="10pm"
                />
                <EmailRow

                    title="Twitch"
                    subject="Hey fellowsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa streamer!!!"
                    description="This is a test"
                    time="10pm"
                />
                <EmailRow

                    title="Twitch"
                    subject="Hey fellowsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa streamer!!!"
                    description="This is a test"
                    time="10pm"
                />
                <EmailRow

                    title="Twitch"
                    subject="Hey fellowsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa streamer!!!"
                    description="This is a test"
                    time="10pm"
                />
                <EmailRow

                    title="Twitch"
                    subject="Hey fellowsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa streamer!!!"
                    description="This is a test"
                    time="10pm"
                />
                <EmailRow

                    title="Twitch"
                    subject="Hey fellowsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa streamer!!!"
                    description="This is a test"
                    time="10pm"
                />
                <EmailRow

                    title="Twitch"
                    subject="Hey fellowsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa streamer!!!"
                    description="This is a test"
                    time="10pm"
                />
                <EmailRow

                    title="Twitch"
                    subject="Hey fellowsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa streamer!!!"
                    description="This is a test"
                    time="10pm"
                />
                <EmailRow

                    title="Twitch"
                    subject="Hey fellowsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa streamer!!!"
                    description="This is a test"
                    time="10pm"
                />
                <EmailRow

                    title="Twitch"
                    subject="Hey fellowsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa streamer!!!"
                    description="This is a test"
                    time="10pm"
                />

            </div>
        </div>
    )
}

export default EmailList
