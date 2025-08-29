import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { applyFilters, resetFilters } from '../../store/filterSlice';

const colors = ['#f4a226', '#e63946', '#ef476f', '#073b4c', '#264653', '#6d4c41', '#e9c46a', '#f1dede'];
const discounts = [50, 40, 30, 25, 10, 5];
const categories = ['Hoodies', 'Shoes', 'Clothing'];
//const categories = ['Hoodies', 'Shoes', 'Clothing', 'Accessories', 'Suits', 'Collection'];


interface Props
{
    onClose: () => void;
    onCategorySelect: (category: string) => void;
}

const FilterModal: React.FC<Props> = ({ onClose, onCategorySelect }) =>
{
    const dispatch = useDispatch();

    const [minPrice, setMinPrice] = useState(10);
    const [maxPrice, setMaxPrice] = useState(80);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [rating, setRating] = useState<number>(0);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedDiscounts, setSelectedDiscounts] = useState<number[]>([]);

    const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

    const toggleDiscount = (value: number) =>
    {
        setSelectedDiscounts(prev =>
            prev.includes(value) ? prev.filter(d => d !== value) : [...prev, value]
        );
    };

    const onApply = () =>
    {
        dispatch(applyFilters({ minPrice, maxPrice, selectedColor, rating, selectedCategory, selectedDiscounts }));
        onClose();
    };

    const onReset = () =>
    {
        setMinPrice(10);
        setMaxPrice(90);
        setSelectedColor(null);
        setRating(0);
        setSelectedCategory(null);
        setSelectedDiscounts([]);
        setCategoryDropdownOpen(false);
        dispatch(resetFilters());

    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Filter</Text>
                <Ionicons name="options-outline" size={24} />
            </View>

            {/* Price Slider */}
            <Text style={styles.label}>Price</Text>
            <Slider
                style={{ width: '100%' }}
                minimumValue={10}
                maximumValue={200}
                value={maxPrice}
                step={1}
                minimumTrackTintColor="black" // Red for the minimum track
                onValueChange={setMaxPrice}

            />
            <Text>${minPrice} - ${maxPrice}</Text>

            {/* Colors */}
            <Text style={styles.label}>Color</Text>
            <View style={styles.row}>
                {colors.map((c) => (
                    <TouchableOpacity
                        key={c}
                        style={[styles.colorDot, { backgroundColor: c, borderWidth: selectedColor === c ? 2 : 0 }]}
                        onPress={() => setSelectedColor(c)}
                    />
                ))}
            </View>

            {/* Ratings */}
            <Text style={styles.label}>Star Rating</Text>
            <View style={styles.row}>
                {[1, 2, 3, 4, 5].map(star => (
                    <TouchableOpacity
                        key={star}
                        style={[styles.ratingBtn, rating === star && styles.activeRating]}
                        onPress={() => setRating(star)}
                    >
                        <Text style={rating === star && { color: "white" }}>★ {star}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Category Dropdown (simple selection here) */}
            <Text style={styles.label}>Category</Text>
            <View style={styles.dropdownContainer}>
                <TouchableOpacity
                    style={styles.dropdownHeader}
                    onPress={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                >
                    <Text style={styles.dropdownHeaderText}>
                        {selectedCategory || 'Select Category'}
                    </Text>
                    <Ionicons name={categoryDropdownOpen ? 'chevron-up' : 'chevron-down'} size={20} />
                </TouchableOpacity>

                {categoryDropdownOpen && (
                    <FlatList
                        data={categories}
                        keyExtractor={(item) => item}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.dropdownItem}
                                onPress={() =>
                                {
                                    onCategorySelect(item);
                                    setSelectedCategory(item);
                                    setCategoryDropdownOpen(false);
                                }}
                            >
                                <Text style={styles.dropdownItemText}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                )}
            </View>

            {/* Discounts */}
            <Text style={styles.label}>Discount</Text>
            <View style={styles.row}>
                {discounts.map(d => (
                    <TouchableOpacity
                        key={d}
                        style={[styles.discountBtn, selectedDiscounts.includes(d) && styles.activeDiscount]}
                        onPress={() => toggleDiscount(d)}
                    >
                        <Text style={selectedDiscounts.includes(d) && { color: "white" }}>{d}% off</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Buttons */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.applyBtn} onPress={onReset}><Text style={{ color: '#fff' }}>Reset</Text></TouchableOpacity>
                <TouchableOpacity style={styles.applyBtn} onPress={onApply}><Text style={{ color: '#fff' }}>Apply</Text></TouchableOpacity>
            </View>
        </View>
    );
};

export default FilterModal;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: 16, borderRadius: 16 },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
    headerText: { fontSize: 18, fontWeight: '600' },
    label: { marginTop: 10, fontWeight: '600' },
    row: { flexDirection: 'row', flexWrap: 'wrap', marginVertical: 8, gap: 4 },
    colorDot: { width: 28, height: 28, borderRadius: 14, margin: 4 },
    ratingBtn: { borderWidth: 1, borderColor: '#33302E', padding: 12, borderRadius: 360, margin: 4, },
    activeRating: { backgroundColor: '#000', borderColor: '#000', color: '#fff' },
    dropdownContainer: {
        width: '100%',
        marginVertical: 8,
    },
    dropdownHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 26,
        padding: 10,
        backgroundColor: '#fff',
    },
    dropdownHeaderText: {
        fontSize: 16,
    },
    dropdownItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        backgroundColor: '#fff',
    },
    dropdownItemText: {
        fontSize: 16,
    },

    discountBtn: { borderWidth: 1, padding: 10, borderRadius: 26, margin: 4 },
    activeDiscount: { backgroundColor: '#000', borderColor: '#000', color: '#fff' },
    footer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 },
    applyBtn: { backgroundColor: '#000', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 26 }
});
