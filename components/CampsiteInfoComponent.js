import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderCampsite({camspsite}){
    if(campsite){
        return (
            <Card
                featuredTitle={campsite.name}
                image={require('./images/react-lake.jpg')}>
                <Text style={{margin:10}}>
                    {camspsite.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

function CampsiteInfo(props){
    return(
        <RenderCampsite camspsite={props.camspsite} />
    );
}

export default CampsiteInfo;