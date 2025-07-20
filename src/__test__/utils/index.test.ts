import {mapTabPanelItem} from "@/utils";
import {screen} from "@testing-library/react";

describe('mapTabPanelItem', () => {
    it('should return correct id for index 0', () => {
        const result = mapTabPanelItem(0);
        console.log(result);
        expect(result).toEqual({ id: 'tabpanel-0' });
    });

    it('should return correct id for index 1', () => {
        const result = mapTabPanelItem(1);
        console.log(result);
        expect(result).toEqual({ id: 'tabpanel-1' });
    });

    it('should return correct id for negative index', () => {
        const result = mapTabPanelItem(-5);
        console.log(result);
        expect(result).toEqual({ id: 'tabpanel--5' });
    });

    it('should return correct id for large index', () => {
        const result = mapTabPanelItem(999);
        console.log(result);
        expect(result).toEqual({ id: 'tabpanel-999' });
    });
});