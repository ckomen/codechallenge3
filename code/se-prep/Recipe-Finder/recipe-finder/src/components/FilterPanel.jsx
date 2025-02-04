const FilterPanel = ({ onFilter }) => {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            onChange={() => onFilter("vegan")}
          />
          Vegan
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => onFilter("gluten-free")}
          />
          Gluten-Free
        </label>
      </div>
    );
  };
  
  export default FilterPanel;
  