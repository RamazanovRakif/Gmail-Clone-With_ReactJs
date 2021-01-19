import { IconButton } from '@material-ui/core'
import React from 'react'
import './Mail.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ErrorIcon from "@material-ui/icons/Error"
import DeleteIcon from "@material-ui/icons/Delete"
import EmailIcon from "@material-ui/icons/Email"
import WatchLaterIcon from "@material-ui/icons/WatchLater"
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import LabelImportantIcon from "@material-ui/icons/LabelImportant"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import PrintIcon from "@material-ui/icons/Print"
import { selectOpenMail} from '../../features/mailSlice'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Mail = () => {
    const history = useHistory()
    const selectedMail = useSelector(selectOpenMail)
    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__tools__left">
                    <IconButton onClick={()=>history.push("/")}>
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>
                    <IconButton>
                        <ErrorIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <EmailIcon />
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>
                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
                <div className="mail__tools__right">
                    <IconButton>
                        <UnfoldMoreIcon />
                    </IconButton>
                    <IconButton>
                        <PrintIcon />
                    </IconButton>
                    <IconButton>
                        <ExitToAppIcon />
                    </IconButton>
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__body__header">
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportantIcon className="mail__important"/>
                    <p>{selectedMail?.title}</p>
                    <p className="mail__time">{selectedMail?.time}</p>
                </div>



                <div className="mail__message">
                    <p>{selectedMail?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Mail
