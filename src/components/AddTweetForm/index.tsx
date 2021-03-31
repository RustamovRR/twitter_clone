import React, { FC, useState, FormEvent, ReactElement } from 'react';
import { Avatar, Button, CircularProgress, IconButton, TextareaAutosize } from '@material-ui/core'
import classNames from 'classnames';
import { ImageOutlined } from '@material-ui/icons';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { useHomeStyles } from '../../pages/Home/useHomeStyles'

interface AddTweetFormProps {
    classes: ReturnType<typeof useHomeStyles>
    maxRows: number
}

const AddTweetForm: FC<AddTweetFormProps> = ({ classes, maxRows }): ReactElement => {
    const [text, setText] = useState<string>('')
    const MAX_LENGTH = 280
    const textLimitPercent = Math.round((text.length / MAX_LENGTH) * 100)
    const textCount = MAX_LENGTH - text.length

    const handleChangeTextarea = (e: FormEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            setText(e.currentTarget.value)
        }
    }

    return (
        <div>
            <div className={classes.addForm}>
                <div className={classes.addFormBody}>
                    <Avatar
                        className={classes.tweetAvatar}
                        src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80"
                    />
                    <TextareaAutosize
                        value={text}
                        rowsMax={maxRows}
                        onChange={handleChangeTextarea}
                        className={classes.addFormTextarea}
                        placeholder="what search?"
                    />
                </div>
                <div className={classes.addFormBottom}>
                    <div className={classNames(classes.tweetIcon)}>
                        <IconButton color="primary">
                            <ImageOutlined style={{ fontSize: 26 }} />
                        </IconButton>
                        <IconButton color="primary">
                            <EmojiEmotionsIcon style={{ fontSize: 26 }} />
                        </IconButton>
                    </div>
                    <div className={classes.addFormBottomRight}>
                        {text && (
                            <>
                                <span>{textCount}</span>
                                <div className={classes.addFormCircleProgress}>
                                    <CircularProgress
                                        variant="static"
                                        size={20}
                                        thickness={4}
                                        value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                                        style={text.length >= MAX_LENGTH ? { color: 'red' } : undefined}
                                    />
                                    <CircularProgress
                                        style={{ color: 'rgba(0,0,0,0.1)' }}
                                        variant="static"
                                        size={20}
                                        thickness={4}
                                        value={100}
                                    />
                                </div>
                            </>
                        )}
                        <Button disabled={text.length >= MAX_LENGTH} color="primary" variant="contained" >
                            Tweet
                        </Button>
                    </div>
                </div>
            </div>
            <div className={classes.addFormBottomLine} />
        </div>
    )
}

export default AddTweetForm