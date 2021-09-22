import React, { useState } from 'react';
import ListContainer from './ListContainer.styled';
import ListItem from './ListItem.styled';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const items = [
	{ id: '774', name: 'strawberry', color: '#c22' },
	{ id: '894', name: 'orange', color: '#f50' },
	{ id: '362', name: 'banana', color: '#cc0' },
	{ id: '193', name: 'watermelon', color: '#2c4' },
];

export default function App() {
	const [fruits, updateFruits] = useState(items);

	const sortItem = result => {
		if (!result.destination) return;
		let fruits_clone = Array.from(fruits);
		let [itemToReorder] = fruits_clone.splice(result.source.index, 1);
		fruits_clone.splice(result.destination.index, 0, itemToReorder);

		updateFruits(fruits_clone);
	};

	return (
		<DragDropContext onDragEnd={sortItem}>
			<Droppable droppableId="container">
				{provided => (
					<ListContainer ref={provided.innerRef} {...provided.droppableProps}>
						{fruits.map(({ id, name, color }, index) => {
							return (
								<Draggable key={id} draggableId={id} index={index}>
									{provided => (
										<ListItem
											color={color}
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
										>
											{name}
										</ListItem>
									)}
								</Draggable>
							);
						})}
						{provided.placeholder}
					</ListContainer>
				)}
			</Droppable>
		</DragDropContext>
	);
}
