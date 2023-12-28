
type Props = {
    params: {
        id: string;
    };
    searchParams: {
        genre: string;
    }
}

const GenrePage = ({params: {id}, searchParams: {genre}}: Props) => {
  return (
    <div>Genre Page ID: {id} and name: {genre}</div>
  )
}

export default GenrePage