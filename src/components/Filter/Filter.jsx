import { Title } from './Filter.styled';
export const Filter = ({ filter, onFilter }) => {
    return (
      <Title>
        Find contacts by name
        <input type="text" name="filter" value={filter} onChange={onFilter} />
      </Title>
    );
}