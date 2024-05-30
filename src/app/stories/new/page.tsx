import FormStory, { StoryFormData } from "@/containers/FormStory/FormStory";
import Pet from "@/models/Pet";

interface Pet {
  _id: string;
  name: string;
  owner_name: string;
  species: string;
  age: number;
  poddy_trained: boolean;
  diet: string[];
  image_url: string;
  likes: string[];
  dislikes: string[];
}

const getPets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/stories", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const storyForm: StoryFormData = {
  title: "",
  type: "",
  image: "https://picsum.photos/920/446?random=1",
  user: {},
  blocks: [],
};

export default async function NewStory() {
  // const { data: pets }: { data: Pet[] } = await getPets();

  return (
    <>
      {/* <div className="text-white">
        {pets.map((pet) => (
          <div key={pet._id}>
            <p> {pet.name}</p>
            <p> {pet.age}</p>
          </div>
        ))}
      </div> */}
      <FormStory storyForm={storyForm} />
    </>
  );
}
