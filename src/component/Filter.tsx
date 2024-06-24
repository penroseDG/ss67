interface Filter {
  filterStatus: string;
  onFilterChange: (status: string) => void;
}
export default function Filter(filterStatus: string | number | readonly string[] | undefined, onFilterChange: (arg0: string) => void) {
  return (
    <select value={filterStatus} onChange={(e) => onFilterChange(e.target.value)}>
      <option value="">Tất cả</option>
      <option value="Chưa trả">Chưa trả</option>
      <option value="Đã trả">Đã trả</option>
    </select>
  )
}
