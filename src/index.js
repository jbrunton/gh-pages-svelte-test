export default ({ publicPath }) => `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset='utf-8'>
	<meta name='viewport' content='width=device-width,initial-scale=1'>

	<title>Svelte app</title>

	<link rel='icon' type='image/png' href='${publicPath}/favicon.png'>
	<link rel='stylesheet' href='${publicPath}/global.css'>
	<link rel='stylesheet' href='${publicPath}/bundle.css'>

	<script defer src='${publicPath}/bundle.js'></script>
</head>

<body>
</body>
</html>
`;
