import React from "react";
import $ from "jquery";
import ReactDOMServer from "react-dom/server";

import { User } from "./User";
import {displayDate} from "../utils/displayDate";

export function Comment({ comment }) {
    const showUser = () => {
        $("#popover" + comment._id).popover({
            trigger: "hover",
            template: ReactDOMServer.renderToStaticMarkup(
                <User names={comment.user.full_name} />
            ),
        });
    };

    return (
        <div className="card _comment p-2 px-3 mb-3">
            <div className="d-flex justify-content-between align-items-baseline">
                <div className="question">
                    <img
                        src="https://www.w3schools.com/w3images/avatar5.png"
                        className="_avatar mr-3"
                        alt="Avatar"
                    />
                    <a
                        onMouseEnter={showUser}
                        className="pr-2"
                        id={"popover" + comment._id}
                        data-toggle="popover"
                        title="IRUMVA HABUMUGISHA Anselme"
                        data-placement="right"
                        data-content="Student at Rwanda Coding Academy"
                    >
                        {comment.user.username}
                    </a>
                    commented
                </div>
                <div className="_date">Commented on {displayDate(comment.created_at)}</div>
            </div>
            <div className="body pl-4 py-3">{comment.body}</div>
        </div>
    );
}
