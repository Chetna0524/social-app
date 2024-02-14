import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timestamp, comment }) => {
	/* 	console.log("timestamp", timestamp, comment);
	console.log("timestamp parse", parseISO(timestamp), comment);
	console.log("timeago", formatDistanceToNow(parseISO(timestamp)), comment); */
	let timeago = "";
	if (timestamp) {
		let date = parseISO(timestamp);
		let timeperiod = formatDistanceToNow(date);
		timeago = `${timeperiod} ago`;
	}

	return (
		<div>
			<span className="post-item-timeStamp"> {timeago}</span>
		</div>
	);
};

export default TimeAgo;
