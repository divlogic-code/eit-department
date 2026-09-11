# EIT Research & Development Tab

Copy the contents of this folder into `src/Research`.

Add routes:
```jsx
<Route path="/research" element={<RDCommittee />} />
<Route path="/research/journal-papers" element={<JournalPapers />} />
<Route path="/research/book-chapters" element={<BookChapters />} />
<Route path="/research/patents" element={<Patents />} />
<Route path="/research/mous" element={<MOUs />} />
<Route path="/research/fdps" element={<FDPs />} />
<Route path="/research/iic" element={<IIC />} />
<Route path="/research/edc" element={<EDC />} />
<Route path="/research/ipr" element={<IPR />} />
<Route path="/research/conferences" element={<Conferences />} />
```

Journal-paper destination URLs and the truncated ISBN are intentionally preserved as supplied.
