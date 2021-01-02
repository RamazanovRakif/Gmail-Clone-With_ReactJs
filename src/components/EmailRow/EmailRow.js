import { Checkbox, IconButton } from '@material-ui/core';
import React from 'react'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined'
import './EmailRow.css'
const EmailRow = (props) => {
    const { title, subject, description, time } = props;
    return (
        <div className="email_row">
            <div className="email_row_options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>
            <h3 className="email_row_title">
                {title}
            </h3>
            <div className="email_row_message">
                <h4>
                    {subject}
                    <span className="email_row_description">
                        {description}
                    </span>
                </h4>
            </div>
            <div className="email_row_time">
                {time}
            </div>
        </div>
    )
}

export default EmailRow
