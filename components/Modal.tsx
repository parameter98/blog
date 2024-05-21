import { Avatar } from '@nextui-org/avatar';
import { Divider } from '@nextui-org/divider';
import { Button } from '@nextui-org/button';
import { category_data_list } from './Struct/category_data_list';


export default function Modal({data}:category_data_list) {

  return(
    <div id="Modal" >
      <div id='Modal-header' className='flex'>
        <div>Category</div>
        <Avatar isBordered radius="full" size="md" color="danger" src="https://i.pravatar.cc/150?u=a04258114e29026708c"/>
      </div>
      <Divider className='my-2'/>
      <div id='Modal-body'>
        {
          data.map((elem:category_data_list)=>(
            <div id='categories' className='flex'>
              <Button className='flex-1'>
                <p>{elem.category_title}</p>
              </Button>
              <p>{elem.category_viewed}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}