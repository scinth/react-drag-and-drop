import styled from 'styled-components';

const ListItem = styled.li`
	color: white;
	background-color: ${props => props.color};
	text-align: center;
	font-size: 1.5em;
	font-weight: bold;
	padding: 0.7em;
	cursor: grab;
`;

export default ListItem;
