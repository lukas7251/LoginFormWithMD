import { Appbar } from 'react-native-paper';
import * as React from 'react';

export default function MainAppBar(props) {
	return(
		<Appbar.Header
			mode='center-aligned'
			elevated={true}
		>
			<Appbar.Content title={props.title} />
    </Appbar.Header>
  );
}