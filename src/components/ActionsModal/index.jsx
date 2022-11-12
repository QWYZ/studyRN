import React from 'react';
import deviceInfo from '../../utils/deviceInfo';
import { Actionsheet, Button, Center } from 'native-base';

/**动作面板 
 * 
 * @example   
 * const actionOption = [
    {
      key:'colse',
      name:'关闭',
      icon:<Icon viewBox="0 0 24 24" size="6" fill="none">
        <Path d="M12.0007 10.5862L16.9507 5.63623L18.3647 7.05023L13.4147 12.0002L18.3647 16.9502L16.9507 18.3642L12.0007 13.4142L7.05072 18.3642L5.63672 16.9502L10.5867 12.0002L5.63672 7.05023L7.05072 5.63623L12.0007 10.5862Z" />
      </Icon>,
      onPress:()=>{
        closeModal()
      }
    }
  ]
*/
const ActionsModal = (props) => {
    const {actionOption, isOpen, onClose, size="full"}= props;
    // console.log(props);
    return (
        <Actionsheet isOpen={isOpen} onClose={onClose} size={size}>
          <Actionsheet.Content>
          {
            actionOption.map((item)=>{
  
              return(
                <Center key={item.key}>
                    <Actionsheet.Item>
                      <Button 
                        onPress={item.onPress} 
                        color={'black'} 
                        colorScheme={'blueGray'} 
                        size={'lg'} 
                        style={{width:deviceInfo.width}} 
                        variant={'ghost'} 
                        leftIcon={item.icon} 
                      >{item.name}</Button>
                    </Actionsheet.Item>
                </Center>
  
              )
            })
          }
          </Actionsheet.Content>
        </Actionsheet>
      )
}

export default ActionsModal