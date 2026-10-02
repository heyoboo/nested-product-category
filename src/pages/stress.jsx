import { CategoryConfiguration } from "/src/components/category";
import { mockData500Parent } from "../data";

export default function Stress() {
    console.log(mockData500Parent);
    const workingData = [
  {
    id: 7,
    name: "test1",
    displaySequence: 1,
    sourceId: null,
  },
  {
    id: 8,
    name: "test2",
    displaySequence: 2,
    sourceId: null,
  },
  {
    id: 9,
    name: "test2-1",
    displaySequence: 1,
    sourceId: 8,
  },
  {
    id: 10,
    name: "test2-2",
    displaySequence: 2,
    sourceId: 8,
  },
  {
    id: 11,
    name: "test2-3",
    displaySequence: 3,
    sourceId: 8,
  },
]
    
    return (
        <div style={{ height: '100%', width: '100%', color: 'white' }}>
            {!!mockData500Parent?.length &&
                <CategoryConfiguration
                categoryFlatItems={mockData500Parent}
                onClose={() => console.log('close btn')}
                setIsUpdated={() => {}}
                disableSave
                onLocalSave={() =>  console.log('save')}
            />}
        </div>)
}