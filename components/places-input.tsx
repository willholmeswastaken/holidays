import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { MapPin } from "lucide-react";

export const PlacesAutocomplete = ({
  onAddressSelect,
  address,
}: {
  onAddressSelect?: (address: string, lat: number, lng: number) => void;
  address?: string;
}) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
    cache: 86400,
    defaultValue: address || undefined,
  });

  const renderSuggestions = () => {
    return data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
        description,
      } = suggestion;

      return (
        <li
          key={place_id}
          className="flex items-start gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 border-b border-gray-100 dark:border-gray-700 last:border-b-0 group"
          onClick={() => {
            setValue(description, false);
            clearSuggestions();
            void getGeocode({ address: description }).then((results) => {
              const { lat, lng } = getLatLng(results[0]!);
              console.log("📍 Coordinates: ", { lat, lng });
              if (onAddressSelect) onAddressSelect(description, lat, lng);
            });
          }}
        >
          <MapPin className="h-4 w-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 mt-0.5 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
              {main_text}
            </div>
            {secondary_text && (
              <div className="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">
                {secondary_text}
              </div>
            )}
          </div>
        </li>
      );
    });
  };

  return (
    <div className="w-full relative">
      <input
        value={value}
        className="w-full text-gray-700 px-3 py-2 border border-slate-300 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent focus:ring-offset-2 rounded-md"
        disabled={!ready}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for a location..."
      />

      {status === "OK" && data.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          <ul className="py-1">{renderSuggestions()}</ul>
        </div>
      )}
    </div>
  );
};
