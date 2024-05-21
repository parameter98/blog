import { Avatar } from '@nextui-org/avatar';
import { Divider } from '@nextui-org/divider';
import { Button } from '@nextui-org/button';
import { category_data } from './Struct/category_data';

type dataprops = {
  data: category_data[]
};

export default function MenuModal({ data }:dataprops) {

  return(
    <div id="Modal" >
      <div id='Modal-header' className='flex'>
        <div>Category</div>
        <Button isIconOnly className="border-2 rounded-full border-current" >
          <Avatar isBordered radius="full" size="md" color="danger" src="https://i.pravatar.cc/150?u=a04258114e29026708c"/>
        </Button>
      </div>
      <Divider className='my-2'/>
      <div id='Modal-body'>
        {
          data.map((elem)=>(
            <div id='categories' className='flex'>
              <Button className='flex-1'>
                <p>{elem.category_title}</p>
              </Button>
              <p>{elem.category_viewed + " views"}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}